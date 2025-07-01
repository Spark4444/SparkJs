declare global {
    interface Date {
        // Enhanced getDay method with optional formatting
        getDay(asNumber?: boolean, asShort?: boolean): string | number;
        
        // Enhanced getMonth method with optional formatting
        getMonth(asNumber?: boolean, asShort?: boolean): string | number;
        
        // Enhanced getDate method with optional formatting
        getDate(asString?: boolean, asShort?: boolean): string | number;
        
        // Enhanced getYear method with optional formatting
        getYear(asShort?: boolean, old?: boolean): number | string;
        
        // Get formatted date with customizable parts
        getFullFormattedDate(separator?: string, date?: boolean | any[], month?: boolean | any[], year?: boolean | any[]): string;
        
        // Enhanced getHours method with optional formatting
        getHours(asShort?: boolean): string | number;
        
        // Enhanced getMinutes method with optional formatting
        getMinutes(asShort?: boolean): string | number;
        
        // Enhanced getSeconds method with optional formatting
        getSeconds(asShort?: boolean): string | number;
        
        // Get formatted time with customizable parts
        getFullTime(separator?: string, hours?: boolean, minutes?: boolean, seconds?: boolean, hoursAsShort?: boolean, minutesAsShort?: boolean, secondsAsShort?: boolean): string;
        
        // Enhanced timezone offset method
        getTimezoneOffset(asMinutes?: boolean, addGMT?: boolean): string | number;
        
        // Get user's timezone
        getTimeZone(): string;
        
        // Get continent from timezone
        getContinent(): string;
        
        // Get country from timezone
        getCountry(): string;
        
        // Get timezone zone information
        getZone(addBrackets?: boolean): string;
        
        // Get comprehensive formatted date
        getFullDate(day?: boolean | any[], month?: boolean | any[], date?: boolean | any[], time?: boolean | any[], offset?: boolean | any[], zone?: boolean | any[]): string;
        
        // Custom date formatting with template strings
        formatDate(format: string): string;
        
        // UTC versions of enhanced methods
        getUTCDay(asNumber?: boolean, asShort?: boolean): string | number;
        getUTCMonth(asNumber?: boolean, asShort?: boolean): string | number;
        getUTCDate(asString?: boolean, asShort?: boolean): string | number;
        getUTCYear(asShort?: boolean, old?: boolean): number | string;
        getUTCFullFormattedDate(separator?: string, date?: boolean | any[], month?: boolean | any[], year?: boolean | any[]): string;
        getUTCHours(asShort?: boolean): string | number;
        getUTCMinutes(asShort?: boolean): string | number;
        getUTCSeconds(asShort?: boolean): string | number;
        getUTCFullTime(separator?: string, hours?: boolean, minutes?: boolean, seconds?: boolean, hoursAsShort?: boolean, minutesAsShort?: boolean, secondsAsShort?: boolean): string;
        getUTCFullDate(day?: boolean | any[], month?: boolean | any[], date?: boolean | any[], time?: boolean | any[], zone?: boolean | any[]): string;
        formatUTCDate(format: string): string;
    }
}

export const BetterDate: DateConstructor;