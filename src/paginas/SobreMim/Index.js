import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo/Index"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/minha_foto.jpg'

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do Gabriel"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, consequatur.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque officiis, libero veniam nemo laboriosam voluptatum enim aliquam temporibus corrupti, a sunt, odio obcaecati sit sed nisi beatae. Tenetur, aliquam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, rem voluptatum. Facilis pariatur, nemo voluptate voluptatum optio eligendi accusantium iusto est repellendus numquam fugit et incidunt alias quia? Doloremque, alias.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quo temporibus recusandae quas distinctio atque neque assumenda voluptatem nisi vitae, deserunt iure pariatur. Laudantium et maxime, id iusto provident illo?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo dicta quasi consectetur quo asperiores minima iusto corrupti, hic quas provident a, excepturi ea possimus vel nemo! Dolorem, nostrum beatae.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ad itaque dolorem in provident blanditiis eos molestiae culpa, odio fuga assumenda, iste doloribus ex quidem nisi. Esse nihil culpa temporibus.
            </p>
        </PostModelo>
    )
}

export default SobreMim