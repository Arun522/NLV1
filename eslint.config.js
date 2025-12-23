import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Global ignores for files that should never be linted
  {
    ignores: [
      'dist/**/*',
      'node_modules/**/*',
      'public/js/**/*',        // Exclude all third-party JS files
      'public/fonts/**/*',     // Exclude font files
      'public/images/**/*',    // Exclude image files
      '*.min.js',              // Exclude minified files
      '**/*.min.js',           // Exclude minified files in subdirectories
      'build/**/*',            // Exclude build directory
      'coverage/**/*',         // Exclude test coverage
      '.vite/**/*'             // Exclude Vite cache
    ]
  },
  // Configuration for source files
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        // Add global variables to prevent no-undef errors
        process: 'readonly',
        global: 'readonly',
        __APP_VERSION__: 'readonly',
        __BUILD_DATE__: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Relax unused variables rule for imports (common in React)
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]|^motion$|^React$',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }],
      // Allow console logs in development
      'no-console': 'warn',
      // Disable some strict rules for better DX
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    },
  },
  // Separate configuration for Node.js files (config files, etc.)
  {
    files: ['vite.config.js', 'eslint.config.js', 'tailwind.config.js', 'postcss.config.js', 'ecosystem.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly'
      },
    },
    rules: {
      'no-console': 'off',
      'no-undef': 'off' // Allow process.env in config files
    }
  }
]
