module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                header: "var(--header-height)",
            },
            colors: {
                txt: "var(--text-color)",
                primary: "var(--primary-color)",
            },
            keyframes: {
                fadeOut: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                growth: {
                    from: {
                        transform: "scale(0)",
                    },
                    to: {
                        transform: "scale(1)",
                    },
                },
            },
            animation: {
                fade_out: "fadeOut 0.5s ease",
                growth: "growth 0.4s ease",
            },
        },
        maxWidth: {
            max_width: "var(--max-width)",
        },
        boxShadow: {
            sd: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
        },
    },
    plugins: [],
};
