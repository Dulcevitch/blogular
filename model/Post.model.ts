/**
 * Classe pour un post
 */
export class Post {
    title: string;
    content: string;
    loveIts: number; // love It ou don't love It
    createdAt: Date;

    /*
     * Construire un Post à partir d'un titre et d'un contenu.
     *
     * Par défaut un post est neutre et créé aujourd'hui.
     */
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.createdAt = new Date();
    }

}
