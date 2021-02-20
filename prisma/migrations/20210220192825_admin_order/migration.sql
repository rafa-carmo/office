/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[order]` on the table `ServiceOrder`. If there are existing duplicate values, the migration will fail.
  - Added the required column `order` to the `ServiceOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceOrder" ADD COLUMN     "order" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "ServiceOrder.order_unique" ON "ServiceOrder"("order");
