import { UserDomainRepository } from "../../domain/repositories/UserDomainRepository.ts";
import { User } from "../../domain/model/User.ts";

export class UserDataRepositoryImpl implements UserDomainRepository {
  async getUser(id: number): Promise<User> {
    // Implementasi fetching data dari API atau sumber data lainnya
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
