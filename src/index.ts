import { server } from './server/Server';

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running in port: ${process.env.PORT || 3000}`)
});