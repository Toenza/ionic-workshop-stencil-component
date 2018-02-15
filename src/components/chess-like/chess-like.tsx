import { Component, State, Prop } from '@stencil/core';

@Component({
    tag: 'chess-like',
    styleUrl: 'chess-like.scss'
})
export class MyName {
    @Prop() textPos: string;
    @Prop() textNeg: string;
    @State() like: boolean;

    componentWillLoad() {
        this.like = false;
    }

    toggleLike() {
        this.like = !this.like;
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.toggleLike()}>
                    <span>
                        {this.like ? this.textPos : this.textNeg}
    				</span>
                </button>
            </div>
        );
    }
}
