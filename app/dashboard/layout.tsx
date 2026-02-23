import SideNav from '@/app/ui/dashboard/sidenav';
import Footer from '@/app/ui/dashboard/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>

            {/* Main Section */}
            <div className="flex flex-col flex-1">

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-12">
                    {children}
                </main>

                {/* Footer */}
                <footer className="w-full border-t">
                    <Footer />
                </footer>

            </div>
        </div>
    );

}