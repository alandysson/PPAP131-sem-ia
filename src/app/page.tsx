export default function Home() {
  return (
    <div>
      <div className="w-full bg-[#0A5517] h-[42px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">
          <h1 className="font-bold text-base mt-[34px]">Cadastre o aluno</h1>
          <form className="mt-[42px]">
            <div className="flex flex-col">
              <label htmlFor="name">Nome: </label>
              <input
                name="name"
                className="rounded-md h-[42px] mt-2"
                placeholder="Digite o nome do aluno"
                required
              />
            </div>
            <div className="flex flex-col mt-[14px]">
              <label htmlFor="cpf">CPF: </label>
              <input
                name="cpf"
                className="rounded-md h-[42px] mt-2"
                placeholder="Digite o CPF do aluno"
                required
              />
            </div>
            <div className="flex flex-col mt-[14px]">
              <label htmlFor="mothername">Nome da mãe: </label>
              <input
                name="mothername"
                className="rounded-md h-[42px] mt-2"
                placeholder="Digite o nome da mãe do aluno"
              />
            </div>
            <div className="flex flex-col mt-[14px]">
              <label htmlFor="course">Curso: </label>
              <select name="course" className="rounded-md mt-2 text-gray-500">
                <option value="">Selecione o curso</option>
              </select>
            </div>
            <div className="flex flex-col mt-[14px]">
              <label htmlFor="course">Estado: </label>
              <select name="course" className="rounded-md mt-2 text-gray-500">
                <option value="">Selecione o estado</option>
              </select>
            </div>
            <div className="flex flex-col mt-[14px]">
              <label htmlFor="city">Cidade: </label>
              <select name="city" className="rounded-md mt-2 text-gray-500">
                <option value="">Selecione a cidade</option>
              </select>
            </div>
            <div className="flex flex-row justify-between mt-[47px]">
              <button className="border border-[#909090] p-2 text-md rounded-md w-[103px]">Cancelar</button>
              <button className="border bg-[#0A5517] text-white text-md p-2 rounded-md w-[103px]">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
