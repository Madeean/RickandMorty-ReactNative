import { User } from '../model/User.ts';

export interface UserDomainRepository {
  getUser(id: number): Promise<User>;
}
