import { Request, Response } from "express";
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import '../../shared/services/TranslationsYup';

interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body);
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            validationErrors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({ err });
    }

    return res.send(req.body.nome);
}