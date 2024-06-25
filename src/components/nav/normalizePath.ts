export function normalizePath(path: string): string {
    const trimmedLowercase = path.trim().toLowerCase();
    if (trimmedLowercase.endsWith("/")) {
        return trimmedLowercase.substring(0, trimmedLowercase.length - 1);
    }
    return trimmedLowercase;
}
