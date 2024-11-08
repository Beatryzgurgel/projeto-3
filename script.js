const properties = []
let option

do {
    option = prompt(
        `Bem vindo ao cadastro de Imóveis:\nQuantidade de imóveis ja cadastrados: ${properties.length}\n\n1. Adcionar novo imóvel\n2. Lista de imóveis salvos\n3. Sair do cadastro`
    )

    switch (option) {
        case '1':
            const property = {}

            property.owner = prompt("Digite o nome do proprietário:")
            property.bedrooms = parseInt(prompt("Digite a quantidade de quartos que deseja:"))
            property.bathrooms = parseInt(prompt("Digite a quantidade de banheiros que deseja:"))
            property.garage = confirm("O imóvel tem garagem?")

            const confirmSave = confirm(
                `Deseja salvar este imóvel?\n\nProprietário: ${property.owner}\nQuartos: ${property.bedrooms}\nBanheiros: ${property.bathrooms}\nGaragem: ${property.garage ? "Sim" : "Não"}`
            )

            if (confirmSave) {
                properties.push(property)
                alert("Imóvel adcionado com sucesso!")
            } else {
                alert("Imóvel descartado.")
            }
            break

            case '2':
                if (properties.length === 0) {
                    alert("Nenhum imóvel cadastrado foi encontrado.")
                } else {
                    let propertyList = "Lista de Imóveis ja Cadastrados:\n\n"
                    for (let i = 0; i < properties.length; i++) {
                        propertyList += `Imóvel ${i + 1}:\n nome do Proprietário: ${properties[i].owner}\n Quantidade de Quartos: ${properties[i].bedrooms}\n Quantidade de Banheiros: ${properties[i].bathrooms}\nGaragem: ${properties[i].garage ? "Sim" : "Não"}\n\n`
                    }
                    alert(propertyList)
                }
                break            

        case '3':
            alert("Finalizando o programa.")
            break

        default:
            alert("Opção não existente.! Tente novamente.")
            break
    }
} while (option !== '3')