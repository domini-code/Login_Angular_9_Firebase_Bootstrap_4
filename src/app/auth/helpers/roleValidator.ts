import { User } from '@shared/models/user.interface';

export class RoleValidator {
  isSuscriptor(user: User): boolean {
    return user.role === 'SUSCRIPTOR';
  }

  isEditor(user: User): boolean {
    console.log('user->', user);

    return user.role === 'EDITOR';
  }

  isAdmin(user: User): boolean {
    return user.role === 'ADMIN';
  }
}
