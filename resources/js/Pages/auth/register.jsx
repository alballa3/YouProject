import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { User, Mail, Lock } from "lucide-react";
import { Link, useForm } from "@inertiajs/react";

const RegisterPage = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration submitted:", data);

        // Example Inertia POST request (you can adjust the endpoint and options as needed)
        post("/auth/register", {
            onSuccess: () => console.log("Form submitted successfully!"),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">
                <div className="relative hidden md:block">
                    <img
                        src="https://media.gq.com/photos/56cb52771388833772dbc5ea/16:9/w_1280,c_limit/GettyImages-465384280.jpg"
                        alt="Stylish jacket"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col gap-5 items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center px-4">
                            You
                        </h1>
                        <p className="text-xl font-bold text-white text-center px-4">
                            Be A Better Version of{" "}
                            <span className="text-blue-400">Yourself</span>{" "}
                        </p>
                    </div>
                </div>
                <div>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                            Create an Account
                        </CardTitle>
                        <CardDescription className="text-center">
                            Sign up to start shopping for amazing hoodies!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="name"
                                    className="text-sm font-medium"
                                >
                                    Name
                                </Label>
                                <div className="relative">
                                    <User
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        size={18}
                                    />
                                    <Input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={handleChange}
                                        required
                                        className="pl-10"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.name}
                                </p>
                            )}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        size={18}
                                    />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                        className="pl-10"
                                        placeholder="johndoe@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        size={18}
                                    />
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        required
                                        className="pl-10"
                                        placeholder="••••••••"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Button type="submit" className="w-full mt-6">
                                Register
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href="/auth/login"
                                className="text-blue-600 hover:underline"
                            >
                                Log in
                            </Link>
                        </p>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
};

export default RegisterPage;
