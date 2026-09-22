// Statement kata — split this class into small, cohesive classes (see README).
export interface Rental {
    title: string;
    days: number;
}

export class Statement {
    private rentals: Rental[] = [];

    addRental(title: string, days: number): void {
        this.rentals.push({ title, days });
    }

    amountFor(rental: Rental): number {
        let amount = 2;
        if (rental.days > 2) {
            amount += (rental.days - 2) * 1.5;
        }
        return amount;
    }

    totalAmount(): number {
        return this.rentals.reduce((sum, rental) => sum + this.amountFor(rental), 0);
    }

    frequentRenterPoints(): number {
        return this.rentals.reduce((points, rental) => points + 1 + (rental.days > 2 ? 1 : 0), 0);
    }

    statement(): string {
        const lines = this.rentals.map((rental) => `${rental.title}: $${this.amountFor(rental).toFixed(2)}`);
        lines.push(`Total: $${this.totalAmount().toFixed(2)}`);
        lines.push(`Points: ${this.frequentRenterPoints()}`);
        return lines.join('\n');
    }
}
