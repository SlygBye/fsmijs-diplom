import { User } from '../schemas/user.schema';
import { IParamId } from './param_id';

export interface IUserService {
  create(data: Partial<User>): Promise<User>;
  findById(id: IParamId): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAll(params: ISearchUserParams): Promise<User[]>;
}
