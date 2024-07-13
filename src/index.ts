import chalk from 'chalk';

export function coloredJSONStringify(obj: any): string {
    // First stringify without coloring
    const jsonString = JSON.stringify(obj, null, 2);

    // Apply color to values
    let coloredString = jsonString
        .replace(/: "([^"]*)"/g, (match, p1) => `: "${chalk.green(p1)}"`) // String values
        .replace(/: (\d+)/g, (match, p1) => `: ${chalk.blue(p1)}`) // Number values
        .replace(/: (true|false)/g, (match, p1) => `: ${chalk.yellow(p1)}`) // Boolean values
        .replace(/: (null)/g, (match, p1) => `: ${chalk.gray(p1)}`); // Null values

    // Apply color to keys
    coloredString = coloredString.replace(/"([^"]+)":/g, (match, p1) => chalk.magenta(`"${p1}":`));

    return coloredString;
}
