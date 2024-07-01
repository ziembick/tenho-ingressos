import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { EventModel } from "../../models";
import Title from "../components/Title";

export default function CheckoutPage() {
  const event: EventModel = {
    id: "1",
    name: "Desenvolvimento de software",
    organization: "Cubos",
    date: "2022-12-31T00:00:00.000Z",
    location: "São Paulo",
    price: '',
    rating: '',
    image_url: '',
  };
  return (
    <main className="mt-10 flex flex-wrap justify-center md:justify-between">
      <div className="mb-4 flex max-h-[250px] w-full max-w-[478px] flex-col gap-y-6 rounded-2xl bg-secondary p-4">
        <Title>Resumo da compra</Title>
        <p className="font-semibold">
          {event.name}
          <br />
          {event.location}
          <br />
          {new Date(event.date).toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="font-semibold text-white">preço total</p>
      </div>
      <div className="w-full max-w-[650px] rounded-2xl bg-secondary p-4">
        <Title>Informações de pagamento</Title>

        <div className="flex flex-col">
          <label htmlFor="titular">E-mail</label>
          <input
            type="email"
            name="email"
            className="mt-2 border-solid rounded p-2 h-10 bg-input"
            defaultValue={"test@test.com"}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titular">Nome no cartão</label>
          <input
            type="text"
            name="card_name"
            className="mt-2 border-solid rounded p-2 h-10 bg-input"
            defaultValue={"Teste Teste"}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cc">Numero do cartão</label>
          <input
            type="card_number"
            name="cc"
            className="mt-2 border-solid rounded p-2 h-10 bg-input"
            defaultValue={"4111111111111111"}
          />
        </div>
        <div className="flex flex-wrap sm:justify-between">
          <div className="flex w-full flex-col md:w-auto">
            <label htmlFor="expire">Vencimento</label>
            <input
              type="text"
              name="expire_date"
              className="mt-2 sm:w-[240px] border-solid rounded p-2 h-10 bg-input"
              defaultValue={"12/2024"}
            />
          </div>
          <div className="flex w-full flex-col md:w-auto">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              className="mt-2 sm:w-[240px] border-solid rounded p-2 h-10 bg-input"
              defaultValue={"123"}
            />
          </div>
        </div>
        <button className="rounded-lg bg-btn-primary py-4 px-4 text-sm font-semibold uppercase text-btn-primary">
          Finalizar pagamento
        </button>
      </div>
    </main>
  );
}
