import { expect } from 'chai';
import { coloredJSONStringify } from '../src/index.js';
import chalk from 'chalk';

describe('coloredJSONStringify', () => {
    it('should return a colored JSON string', () => {
        const obj = { name: "John", age: 30, married: true, children: null };
        const result = coloredJSONStringify(obj);
        console.log('Result:', result);

        expect(result).to.be.a('string');

        // Check for color codes in keys
        expect(result).to.contain(chalk.magenta('"name":'));
        expect(result).to.contain(chalk.magenta('"age":'));
        expect(result).to.contain(chalk.magenta('"married":'));
        expect(result).to.contain(chalk.magenta('"children":'));

        // Check for color codes in string values
        expect(result).to.contain(chalk.green('"John"'));

        // Check for color codes in number values
        expect(result).to.contain(chalk.blue('30'));

        // Check for color codes in boolean values
        expect(result).to.contain(chalk.yellow('true'));

        // Check for color codes in null values
        expect(result).to.contain(chalk.gray('null'));
    });
});
