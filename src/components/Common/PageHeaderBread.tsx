const PageHeaderBread = ({ title }: { title: string }) => {
    return (

        <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white dark:from-slate-900 dark:to-slate-950 py-18">

            <div className="absolute inset-0 opacity-30">
                <svg
                    className="absolute bottom-0 w-full h-full text-blue-200 dark:text-slate-800"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h1>
            </div>
        </section>)
}

export default PageHeaderBread;