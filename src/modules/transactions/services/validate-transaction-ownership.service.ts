import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transaction.repositories';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}
  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transactionsRepository.findFirst({
      where: {
        id: transactionId,
        userId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
