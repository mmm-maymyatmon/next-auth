

const AuthLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="max-w-xl mx-auto" >
            {children}
        </main>
    )
}

export default AuthLayout;