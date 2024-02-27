import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity({ name: "tb_imovel" })
class House {
    @PrimaryColumn({ name: "id_imovel"})
    id?: string

    @Column({ name: "endereco_imovel" })
    address?: string

    @Column({ name: "tipo_imovel" })
    type?: string

    @Column({ name: "area_imovel" })
    area?: number

    @Column({ name: "quartos_imovel" })
    rooms?: number

    @Column({ name: "banheiros_imovel" })
    bathrooms?: number

    @Column({ name: "vagasgaragem_imovel" })
    parkingSpaces?: number

    @Column({ name: "descricao_imovel" })
    description?: string

    @Column({ name: "precovenda_imovel" })
    salePrice?: number

    @Column({ name: "precoaluguel_imovel" })
    rentPrice?: number

    @Column({ name: "disponivelvenda_imovel" })
    saleAvailable?: boolean

    @Column({ name: "disponivelaluguel_imovel" })
    rentAvailable?: boolean

    @Column({ name: "atualizado_em" })
    updateAt?: Date

    @Column({ name: "criado_em" })
    createdAt?: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { House };