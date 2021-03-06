/* eslint-disable no-restricted-syntax */

export default {
    invalid: [
        {
            code: `
                /**
                 * @Param
                 */
                function quux () {

                }
            `,
            errors: [
                {
                    message: 'Invalid JSDoc tag name "Param".'
                }
            ]
        },
        {
            code: `
                /**
                 * @foo
                 */
                function quux () {

                }
            `,
            errors: [
                {
                    message: 'Invalid JSDoc tag name "foo".'
                }
            ]
        },
        {
            code: `
                /**
                 * @arg foo
                 */
                function quux (foo) {

                }
            `,
            errors: [
                {
                    message: 'Invalid JSDoc tag (preference). Replace "arg" JSDoc tag with "param".'
                }
            ]
        },
        {
            code: `
                /**
                 * @param foo
                 */
                function quux (foo) {

                }
            `,
            errors: [
                {
                    message: 'Invalid JSDoc tag (preference). Replace "param" JSDoc tag with "arg".'
                }
            ],
            settings: {
                jsdoc: {
                    tagNamePreference: {
                        param: 'arg'
                    }
                }
            }
        }
    ],
    valid: [
        {
            code: `
                /**
                 * @param foo
                 */
                function quux (foo) {

                }
            `
        },
        {
            code: `
                /**
                 * @arg foo
                 */
                function quux (foo) {

                }
            `,
            settings: {
                jsdoc: {
                    tagNamePreference: {
                        param: 'arg'
                    }
                }
            }
        }
    ]
};
