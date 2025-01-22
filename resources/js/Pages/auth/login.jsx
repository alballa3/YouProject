import { useForm } from "@inertiajs/react";
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
import { Mail, Lock, Loader2 } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/auth/login", {
            onFinish: () => console.log("Login process finished."),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-5xl grid md:grid-cols-2 gap-8 overflow-hidden">
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
                            <span className="text-blue-400">Yourself</span>
                        </p>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <CardHeader className="space-y-4">
                        <CardTitle className="text-3xl font-bold text-center">
                            Log In
                        </CardTitle>
                        <CardDescription className="text-center text-lg">
                            Sign in to your account to start shopping!
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {errors.submit && (
                                <div
                                    className="p-3 text-red-500 bg-red-50 rounded-md text-center"
                                    role="alert"
                                >
                                    {errors.submit}
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-lg">
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        size={20}
                                        aria-hidden="true"
                                    />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="pl-10 py-6 text-lg"
                                        placeholder="johndoe@example.com"
                                        aria-describedby={
                                            errors.email
                                                ? "email-error"
                                                : undefined
                                        }
                                        autoComplete="email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-lg">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                        size={20}
                                        aria-hidden="true"
                                    />
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        className="pl-10 py-6 text-lg"
                                        placeholder="••••••••"
                                        aria-describedby={
                                            errors.password
                                                ? "password-error"
                                                : undefined
                                        }
                                        autoComplete="current-password"
                                    />
                                </div>
                                {errors.password && (
                                    <p
                                        id="password-error"
                                        className="text-red-500 text-sm mt-1"
                                        role="alert"
                                    >
                                        {errors.password}
                                    </p>
                                )}
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="text-red-500 text-sm mt-1"
                                        role="alert"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-6 text-lg mt-8"
                                disabled={processing}
                            >
                                {processing ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Logging in...
                                    </>
                                ) : (
                                    "Log In"
                                )}
                            </Button>
                        </form>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center space-y-4 mt-6">
                        <a
                            href="/forgot-password"
                            className="text-lg text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                        >
                            Forgot your password?
                        </a>
                        <p className="text-lg text-gray-600">
                            Don't have an account?{" "}
                            <Link
                                href="/auth/register"
                                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm"
                            >
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}
