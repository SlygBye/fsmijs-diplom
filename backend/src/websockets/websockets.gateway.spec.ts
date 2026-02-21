import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketsGateway  } from './websockets.gateway';

describe('WebsocetsGateway', () => {
  let gateway: WebsocketsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebsocketsGateway],
    }).compile();

    gateway = module.get<WebsocketsGateway>(WebsocetsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
