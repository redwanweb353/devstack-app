
export const getTechnologyStyle = (id: string) => {
    if (id === "react") {
        return "bg-[#F0F9FF] text-[#0EA5E9] border border-[#E0F2FE]";
    } else if (id === "vue") {
        return "bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]";
    } else if (id === "svelte") {
        return "bg-[#FFF7ED] text-[#EA580C] border border-[#FFEDD5]";
    } else if (id === "nextjs") {
        return "bg-[#F1F5F9] text-[#0F172A] border border-[#E3E3E3]";
    } else if (id === "nodejs") {
        return "bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]";
    } else if (id === "postgresql") {
        return "bg-[#F0F9FF] text-[#0076B3] border border-[#E0F2FE]";
    } else if (id === "redis") {
        return "bg-[#FEF2F2] text-[#DC2626] border border-[#FEE2E2]";
    } else if (id === "javascript") {
        return "bg-[#FFFBEB] text-[#FFDE00] border border-[#FEF3C7]";
    } else if (id === "typescript") {
        return "bg-[#F0F9FF] text-[#0284C7] border border-[#E0F2FE]";
    } else if (id === "java") {
        return "bg-[#F0F9FF] text-[#0074BD] border border-[#E0F2FE]";
    } else if (id === "tailwindcss") {
        return "bg-[#ECFEFF] text-[#0891B2] border border-[#CFFAFE]";
    } else if (id === "docker") {
        return "bg-[#F0F9FF] text-[#28B8EB] border border-[#E0F2FE]";
    } else if (id === "mongodb") {
        return "bg-[#ECFDF5] text-[#0AC407] border border-[#D1FAE5]";
    } else if (id === "python") {
        return "bg-[#F0F9FF] text-[#37A5DD] border border-[#E0F2FE]";
    } else if (id === "git") {
        return "bg-[#FEF2F2] text-[#DC5726] border border-[#FEE2E2]";
    } else {
        return;
    }
};