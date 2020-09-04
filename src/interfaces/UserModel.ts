export default interface UserModel {
    user(): { fullName: string, email: string, age: number };
}