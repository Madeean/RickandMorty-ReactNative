import { User } from "../model/User.ts";

export interface UserDomainUseCase {
  getUser(id: number): Promise<User>;
}
