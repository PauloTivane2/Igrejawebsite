import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { nome, email, assunto, mensagem } = body;

    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service (e.g., Resend, SendGrid)
    // For now, we log and return success
    console.log("Contact form submission:", { nome, email, assunto, mensagem });

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
