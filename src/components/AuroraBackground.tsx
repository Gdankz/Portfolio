export const AuroraBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 overflow-hidden pointer-events-none z-0 dark:hidden"
        >
            <div className="absolute -top-40 -left-40 w-80 h-80 sm:w-[36rem] sm:h-[36rem] rounded-full bg-violet-300/30 blur-3xl animate-aurora-1" />
            <div className="absolute top-1/3 -right-48 w-72 h-72 sm:w-[32rem] sm:h-[32rem] rounded-full bg-sky-300/25 blur-3xl animate-aurora-2" />
            <div className="absolute -bottom-48 left-1/4 w-80 h-80 sm:w-[38rem] sm:h-[38rem] rounded-full bg-fuchsia-300/20 blur-3xl animate-aurora-3" />
        </div>
    )
}
