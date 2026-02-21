import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketsGateway {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
       console.log('server on', socket.id);
       console.log('Connected');
    });

    this.server.off('connection', (socket) => {
       console.log('server off', socket.id);
       console.log('Disconnected');
    });
  }

  @SubscribeMessage('clientToManager')
  handleMessageToManager(@MessageBody() body: any): any {
    body.func = 'clientToManager';
    const messageClientName = `serverToClient${body.clientId}`;
    this.server.emit(messageClientName, body);
    this.server.emit('serverToManager', body);
    return 'clientToManager';
  }

  @SubscribeMessage('managerToClient')
  handleMessageToClient(@MessageBody() body: any): string {
    body.func = 'managerToClient';
    const messageClientName = `serverToClient${body.clientId}`;
    this.server.emit(messageClientName, body);
    this.server.emit('serverToManager', body);
    return 'managerToClient';
  }

  @SubscribeMessage('clientReadMessage')
  clientReadMessage(@MessageBody() body: any): string {
    body.func = 'clientReadMessage'; 
    this.server.emit('serverToManager', body);
    return 'clientReadMessage';
  }

  @SubscribeMessage('managerReadMessage')
  managerReadMessage(@MessageBody() body: any): string {
    body.func = 'managerToClient';
    const messageClientName = `serverToClient${body.clientId}`;
    this.server.emit(messageClientName, body);
    return 'managerReadMessage';
  }
}
