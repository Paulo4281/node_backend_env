import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity({ name: "tb_usuario" })
class User {
    @PrimaryColumn({ name: "id_usuario" })
    id?: string

    @Column({ name: "nome_usuario" })
    name?: string

    @Column({ name: "email_usuario" })
    mail?: string

    @Column({ name: "senha_usuario" })
    password?: string

    @Column({ name: "dtnascimento_usuario" })
    birth?: Date

    @Column({ name: "atualizado_em" })
    updatedAt?: Date

    @Column({ name: "criado_em" })
    createdAt?: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { User };