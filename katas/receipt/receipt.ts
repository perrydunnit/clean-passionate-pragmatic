// Receipt kata — reorder this file so it reads top-down (see README).
export interface LineItem {
    name: string;
    price: number;
    quantity: number;
}

export function tax(items: LineItem[]): number {
    return subtotal(items) * 0.08;
}

export function formatLine(item: LineItem): string {
    return `${item.name} x${item.quantity} @ $${item.price.toFixed(2)}`;
}

export function printReceipt(items: LineItem[]): string {
    const lines = items.map(formatLine);
    lines.push(`Subtotal: $${subtotal(items).toFixed(2)}`);
    lines.push(`Tax: $${tax(items).toFixed(2)}`);
    lines.push(`Total: $${total(items).toFixed(2)}`);
    return lines.join('\n');
}

export function total(items: LineItem[]): number {
    return subtotal(items) + tax(items);
}

export function subtotal(items: LineItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
