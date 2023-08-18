module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['xo', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'], // Indentación con tabulador
		'@typescript-eslint/no-unused-vars': 'warn', // 'error' for production
		eqeqeq: 'error', // Usar === en vez de ==
		'no-unused-vars': 'error', // No dejar variables sin usar
		semi: ['error', 'always'], // Poner ; al final de cada línea
		curly: ['error', 'multi-line'], // Poner llaves en los if, for, etc
		'no-console': 'warn', // No dejar console.log
		'no-trailing-spaces': 'warn', // No dejar espacios al final de las líneas
		'react/prop-types': 'off', // No dejar prop-types
		'react/react-in-jsx-scope': 'off', // No dejar importar React
		'@typescript-eslint/explicit-module-boundary-types': 'warn', // No dejar funciones sin tipo de retorno
		'object-shorthand': 'warn', // No dejar funciones sin tipo de retorno
		'consistent-return': 'warn', // Asegurarse de que todas las rutas de una función tengan un valor de retorno, o ninguna.
		'default-case': 'warn', // Asegurarse de que todos los switch tengan un default
		'no-alert': 'warn', // No dejar alert
		// Reglas adicionales para el backend
		'no-process-exit': 'error', // Evitar el uso de process.exit
		'no-sync': 'error', // Evitar métodos síncronos (fs.readFileSync, etc.)
		'prefer-arrow-callback': 'error', // Preferir funciones de flecha en callbacks
		'no-return-await': 'error', // Evitar usar return con await innecesariamente
		'no-mixed-requires': 'error', // Evitar require mezclados con código
		'no-new-require': 'error', // Evitar require en medio de código
		'no-path-concat': 'error', // Evitar concatenar rutas con +
		'handle-callback-err': 'error', // Evitar callbacks sin manejar errores
		'no-buffer-constructor': 'error', // Evitar usar new Buffer()
		'no-mixed-spaces-and-tabs': 'error', // Evitar mezclar espacios y tabuladores
		'no-new-object': 'error', // Evitar usar new Object()
		'no-new-wrappers': 'error', // Evitar usar new String(), new Boolean(), etc.
		'@typescript-eslint/naming-convention': 'off',
	},
};
