export const moduleFileExtensions = ['ts', 'tsx', 'js'];
export const testRegex =
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';
export const globals = {
    NODE_ENV: 'test'
};

export const snapshotSerializers = ['@emotion/jest/serializer'];
export const transform = {
    '^.+\\.(j|t)sx?$': 'babel-jest'
};

export const coveragePathIgnorePatterns = [
    '/node_modules/',
    'jest.setup.js',
    '<rootDir>/configs/',
    'jest.config.js',
    '.json',
    '.snap'
];

export const setupFiles = ['<rootDir>/jest/jest.setup.js'];
export const setupFilesAfterEnv = ['<rootDir>/jest/jest.setupAfterEnv.js'];
export const coverageReporters = ['json', 'lcov', 'text', 'text-summary'];

export const moduleNameMapper = {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js'
};

export const moduleDirectories = ['node_modules', 'src'];
