module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      // Rules that apply only to typescript files should go here
      rules: {
        // Disabled because Typescript takes care of that already.
        '@typescript-eslint/no-unused-vars': 'off',
        // This rule is enabled by eslint-config-airbnb and disabled by
        // eslint-plugin-prettier:
        // https://github.com/prettier/eslint-plugin-prettier/issues/65
        // This is a rare issue and we feel like this rule improves the
        // consistency of the code so we keep it on.
        'arrow-body-style': 'warn',
        // Typescript takes care of that already
        'import/named': 'off',
        // Typescript takes care of that already
        'import/no-unresolved': 'off',
        // The "a" element does require the "href" attribute, but it's next's
        // Link job to pass it using "passHref".
        'jsx-a11y/anchor-is-valid': 'off',
        // Extend the rule already enabled by airbnb with "props: true"
        'no-param-reassign': [
          'error',
          {
            // Allow overwriting props from the immerjs draft
            ignorePropertyModificationsFor: ['next'],
            props: true,
          },
        ],
        // "void" is useful to purposefully ignore the result of promises
        'no-void': 'off',
        // "TO-DO" comments (with a hyphen so the IDE doesn't pick it up) are
        // usually left to indicate that something shouldn't be committed. In
        // the event that we actually want to commit a warning comment, we
        // should add a card to the issue tracker instead.
        'no-warning-comments': 'warn',
        // Disabled because we use TypeScript, so we don't care about PropTypes
        'react/prop-types': 'off',
        // Disabled because as of React 17 this is not necessary
        'react/react-in-jsx-scope': 'off',
        // Disabled because there's no scalable way of providing exceptions for
        // this rule. In principle, I agree with it: we shouldn't spread props
        // into our component. But in practice, it gets in the way of libraries
        // like react-hook-form or react-dropzone. Enforcing that our custom
        // components don't accept spread props should therefore be done at the
        // pull request review layer.
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/exhaustive-deps': [
          'warn',
          {
            additionalHooks:
              '(useCallbackWithErrorHandler|useCallbackWithToast)',
          },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
      },
      overrides: [
        // Always prefer default exports, except in files where typically we'd
        // have multiple exported members, although not always.
        {
          files: [
            'src/components/**/logic.ts',
            'src/components/**/styles.ts',
            'src/components/**/styles.tsx',
            'src/containers/**/logic.ts',
            'src/containers/**/styles.ts',
          ],
          rules: {
            'import/prefer-default-export': 'off',
          },
        },
        // Always enforce exported functions to be typed, except in specific
        // cases where we want the return type to be inferred.
        {
          files: [
            'src/components/**/logic.ts',
            'src/containers/**/connect.ts',
            'src/containers/**/logic.ts',
            'src/graphql/hooks/**/*.ts',
            'src/model/**/*.ts',
          ],
          rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
          },
        },
        {
          files: ['src/components/**/*/stories.tsx', 'src/storybook/**/*.tsx'],
          rules: {
            // The storybook section of the project is part of the dev tooling
            // and thus it should be able to import devDependencies.
            'import/no-extraneous-dependencies': 'off',
          },
        },
      ],
    },
    {
      files: ['.storybook/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true },
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
      },
    },
  ],
  // Only rules that apply to both javascript and typescript files should go
  // here. Typescript rules should go in the overrides section.
  rules: {
    'arrow-body-style': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': 'warn',
  },
};
