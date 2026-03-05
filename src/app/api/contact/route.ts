import { NextResponse } from "next/server";

interface ContactFormData {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        if (!body.nome || !body.email || !body.assunto || !body.mensagem) {
            return NextResponse.json(
                { error: "Todos os campos obrigatórios devem ser preenchidos." },
                { status: 400 }
            );
        }

        // TODO: Implement email sending logic here
        // For now, just log and return success
        console.log("Contact form submission:", body);

        return NextResponse.json(
            { message: "Mensagem enviada com sucesso!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Erro ao processar a mensagem." },
            { status: 500 }
        );
    }
}
