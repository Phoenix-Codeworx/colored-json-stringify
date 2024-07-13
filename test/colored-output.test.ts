import { expect } from 'chai';
import { coloredJSONStringify } from '../src/index.js';
import chalk from 'chalk';

describe('coloredJSONStringify', () => {
    it('should return a colored JSON string for a simple object', () => {
        const obj = { name: "John", age: 30, married: true, children: null };
        const result = coloredJSONStringify(obj);
        console.log('Result:', result);

        expect(result).to.be.a('string');

        // Check for color codes in keys
        expect(result).to.include(chalk.magenta('"name":'));
        expect(result).to.include(chalk.magenta('"age":'));
        expect(result).to.include(chalk.magenta('"married":'));
        expect(result).to.include(chalk.magenta('"children":'));

        // Check for color codes in string values
        expect(result).to.include(chalk.green('John'));

        // Check for color codes in number values
        expect(result).to.include(chalk.blue('30'));

        // Check for color codes in boolean values
        expect(result).to.include(chalk.yellow('true'));

        // Check for color codes in null values
        expect(result).to.include(chalk.gray('null'));
    });

    it('should return a colored JSON string for a nested object', () => {
        const obj = {
            name: "John",
            details: {
                age: 30,
                married: true,
                children: [
                    { name: "Jane", age: 10 },
                    { name: "Doe", age: 8 }
                ],
                address: {
                    street: "123 Main St",
                    city: "Somewhere",
                    zip: null
                }
            }
        };
        const result = coloredJSONStringify(obj);
        console.log('Nested Result:', result);

        expect(result).to.be.a('string');

        // Check for color codes in keys
        expect(result).to.include(chalk.magenta('"name":'));
        expect(result).to.include(chalk.magenta('"details":'));
        expect(result).to.include(chalk.magenta('"age":'));
        expect(result).to.include(chalk.magenta('"married":'));
        expect(result).to.include(chalk.magenta('"children":'));
        expect(result).to.include(chalk.magenta('"address":'));
        expect(result).to.include(chalk.magenta('"street":'));
        expect(result).to.include(chalk.magenta('"city":'));
        expect(result).to.include(chalk.magenta('"zip":'));

        // Check for color codes in string values
        expect(result).to.include(chalk.green('John'));
        expect(result).to.include(chalk.green('Jane'));
        expect(result).to.include(chalk.green('Doe'));
        expect(result).to.include(chalk.green('123 Main St'));
        expect(result).to.include(chalk.green('Somewhere'));

        // Check for color codes in number values
        expect(result).to.include(chalk.blue('30'));
        expect(result).to.include(chalk.blue('10'));
        expect(result).to.include(chalk.blue('8'));

        // Check for color codes in boolean values
        expect(result).to.include(chalk.yellow('true'));

        // Check for color codes in null values
        expect(result).to.include(chalk.gray('null'));
    });
});
