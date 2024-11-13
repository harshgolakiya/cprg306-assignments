"use client";

import { useUserAuth } from "./_utils/auth-context";
import SecurePage from "./shopping-list/secure-page";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <div>
            <header>
                <nav>
                    {user ? (
                        <div className="p-2 bg-neutral-900 ">
                            <div className="flex place-items-center justify-between ">
                                <span className="text-neutral-100 text-5xl" >You are logged in as, {user.displayName}</span>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={firebaseSignOut} >Sign Out</button>
                            </div>
                            <SecurePage />
                        </div>
                    ) : (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={gitHubSignIn}>Sign In</button>
                    )}
                </nav>
            </header>
        </div>
    );
}