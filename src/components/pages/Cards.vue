<template>
    <div id="cards">
        <div class="row">

            <div class="column left">
                <div class="card">
                    <h2 v-text="some.h"></h2>
                    <span v-text="some.span"></span>
                </div>
            </div>

            <div class="column right">
                <div class="card">
                    <h2 v-text="some.h"></h2>
                    <span v-text="some.span"></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cards',
        components: {
        },
        data () {
            return {
                owner: 'Arman ',
                githubUrl: 'https://github.com/ArmanKoke',
                linkedinUrl: 'https://www.linkedin.com/in/arman-koketayev/',
                currentYear: new Date().getFullYear(),
                some: {
                    h: 'Lorem ipsum dolo',
                    span: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ' +
                        'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ' +
                        'vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ' +
                        'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, ' +
                        'qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora ' +
                        'incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum ' +
                        'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem ' +
                        'vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui ' +
                        'dolorem eum fugiat quo voluptas nulla pariatur'
                },
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Crushed&display=swap');

    * {
        box-sizing: border-box;
    }

    /* Float four columns side by side */
    .column.left {
        float: left;
        width: 85%;
        padding: 0 10px;
    }

    .column.right {
        float: right;
        width: 80%;
        padding: 0 10px;
    }

    /* Remove extra left and right margins, due to padding in columns */
    .row {
        margin: 0 -5px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Style the counter cards */
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
        padding: 16px;
        margin-top: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }

    /* Responsive columns - one column layout (vertical) on small screens */
    @media screen and (max-width: 600px) {
        .column {
            width: 90%;
            display: block;
            margin-bottom: 20px;
        }
    }
</style>