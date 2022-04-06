import { object, string, TypeOf } from "zod"

export const createUserSchema = object({
    body: object({
        name: string({required_error: 'Name is required'}),

        password: string({required_error: 'Password is required'}).min(6, "Password too short - should be 6 chars minimum"),

        confirmPassword: string({required_error: 'Password does not match'}),

        email: string({required_error: 'Email is required'}).email('Not a valid email'),

    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })
})

//export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.confirmPassword" >

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.confirmPassword">

// future me... take a look at the export above and confirm if the omit didnt go like
// Omit<TypeOf<typeof createUserSchema, "body.passwordConfirmation">>