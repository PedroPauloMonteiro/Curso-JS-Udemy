//Resolver os problemas como o localStorage e a exibição de taks que já forma informadas pelo usuario

function listaDeTarefas() {  //Criação da Factory Function
    let divList = document.getElementById('list'); //Pego o bloco 'List' que vai receber as divs com a Tarefa, descrição e buttons
    let cardTarefa; // INicializo a Div que vai armazenar a Tarefa, descrição e buttons
    let getTaf = [];
    let getDes = [];
    let tarefaStorage;
    let descriptionStorage;
    return {
        inicia() {
            this.tasksSalvas(); //Para mostrar as tarefas e descrições que estão salvas no LocalStorage
            this.click();//Vai pegar o event 'Click'. Com isso vamos conseguir pegar os valores nos inputs
        },


        click() {
            document.addEventListener('click', (e) => { //Aqui eu pego o evento click
                let el = e.target; //salvo o event dentro da variavel el. Alem disso, utilizo o .target para saber qual elemento foi clicado
                if(el.classList.contains('addTarefa')) { // Aqui eu faço uma checagem para saber se o elemento checado tem a classe addTarefa
                    let tarefaInput = document.querySelector('#tarefa'); //Aqui eu pego o input que contem a tarefa, atraves do seu ID
                    let descriptionInput = document.querySelector('#description'); //Aqui eu pego o input que contem a descrição, atraves do seu ID
                    let tarefa = tarefaInput.value; //Aqui eu salvo o valor dentro do input Tarefa na variavel 'Tarefa'
                    let description = descriptionInput.value; //Aqui eu salvo o valor dentro do input descrição na variavel 'description'
                    if(tarefa.length === 0 || description.length  === 0) {//Aqui eu faço uma checagem para saber se dentro do input está armazenado algum valor
                        alert('Digite a tarefa E a descrição');//Caso não tiver armazenado, é exibida essa mensagem para o usuario
                        tarefaInput.focus();//Ultilizo o .focus para quando após o usuario enviar a tarefa e aparecer a mensagem de erro, a caixa de tarefa seja selecionada
                        return //Para finalizar o codigo.
                    } else { //Caso a condição acima não seja verdadeira
                        this.addTarefa(tarefa);// Vai chamar o metodo que vai adicionar a tarefa 
                        this.saveTarefa();//Vai chamar o metodo que adiciona a tarefa no Local Storage
                        this.addDescription(description); //Vai chamar o metodo que vai adicionar a descrição 
                        this.saveDescription(); //Vai chamar o metodo que vai adicionar a descrição no Local Storage
                        tarefaInput.value = ''//Aqui eu apago o conteudo dentro do Input Tarefa
                        descriptionInput.value = ''//Aqui eu apago o conteudo dentro do Input Descrição
                        tarefaInput.focus();//E como fiz na outra codição, apos o usuario enviar alguma valor, a caixa tarefa vai ser selecionada(vai estar em foco)
                    }
                }
                if(el.classList.contains('Delete')) { //Aqui eu checo se o usuario clicou no botão delete, para deletar uma tarefa
                    el.parentElement.remove();//Caso ele tenha clicado, Eu apago todo o bloco que contem a tarefa e a Descrição
                } else if(el.classList.contains('Checked')) {// Aqui eu checo se o usuario clicou no botão finalizado, para indicar que finalizou uma tarefa
                   let elementoPai = el.parentElement;//Aqui eu pego o elemento pai do elemento que acabou de ser clicado, no caso vai ser a div 'card-Tarefa'
                   elementoPai.querySelector('h1').classList.toggle('done')//Aqui eu pego o h1 que está dentro da div pai e adiciona a class done a ela
                   elementoPai.querySelector('p').classList.toggle('done') //Aqui eu pego o h1 que está dentro da div pai e adiciona a class done a ele
                   //Lembrado que done é uma classe que foi personalizada no CSS, e vai deixar os elementos 'riscados' com o line-through
                }
                
            })
        },


        addTarefa(t) { //Esse metodo é usado para criar um H1, adicionar o valor de t(tarefa) dentro desse h1
            let h1Tarefa = document.createElement('h1');//Aqui eu crio o elemento H1
            h1Tarefa.innerText = t; //Atribuo o valor de t, que é o parametro, dentro do 'H1Tarefa'
            h1Tarefa.classList.add('taf-txt')// Aqui eu adiciona uma Classe para o elemento H1 que foi criado
            this.criaDivTarefa(h1Tarefa); //Aqui eu chamo o metodo para criar a div que vai armazernar a tarefa e descrição, passando como parametro a variavel que criamos
            getTaf.push(t);// Aqui eu adiciono o t(tarefa) dentro de um array que será usado posteriormente para adicionar as tarefas ao localStorage
        },

        addDescription(d) { // Esse metodo é usado para criar um p e adicionar o valor d(descrição) dentro desse elemento
            let pDescription = document.createElement('p');//Aqui eu faço a criação do elemento P
            pDescription.innerText = d;//Adiciono o D como innerText(texto) do elemento P
            pDescription.classList.add('description-txt')// Adiciono uma class list ao elemento P
            cardTarefa.appendChild(pDescription)//Nessa linha, eu adiciono o elemento p direto no Card-Tarefa. Isso so é possivel por eu ter inicializado o cardTarefa antes do seu metodo
            this.finishBtn();//Aqui eu chamo o metodo que irá criar o botão finish
            getDes.push(d);// Aqui eu adiciono o D(descrição) dentro de um array quer será utilizado posteriormente para salvar as descrições dentro do Local Storage
        },

        finishBtn() { //Vai criar o botão Finish
            let btnFinish = document.createElement('button');//Aqui eu crio o elemento Button
            btnFinish.innerText = '✓'; //Aqui eu adiciono um InnerText(texto/conteudo) para o elemento
            btnFinish.classList.add('btn-list', 'Checked')//Aqui eu adiciono duas Classes para ele. Btn-list é a classe que contem sua estilização, e Checked para que eu posso pegar, atraves do event, o momento que o usuario clicar nele para indicar que a tarefa foi finalizada
            this.notSubmit() //Chamo esse metodo para evitar que a pagina seja recarregada quando o button for clicado
            cardTarefa.appendChild(btnFinish)//Como no metodo da descrição, eu ja adciono o button finish direto no Card-Tarefa
            this.delBtn();//Aqui eu chamo o metodo para a criação do button Delete
        },

        delBtn() { // Metodo para a criação do botão delete
            let btnDelet = document.createElement('button'); //Aqui eu crio o elemento Button
            btnDelet.innerText = 'X'; //Aqui eu adiciono um innnerText(texto/Conteudo)
            btnDelet.classList.add('btn-list', 'Delete')// Aqui eu tambem adiciono duas classes: Uma de estilização, e outra para ser utilizada quando o button for clicado, no event 'click'
            this.notSubmit()// Metodo para evitar que a pagina seja recarregado quando o button for clicado
            cardTarefa.appendChild(btnDelet)// Aqui eu adiciono o Button na div Card-Tatefa
            //Nesse ponto, toda a div Card-Tarefa já está completa, e ja estara sendo exibida na tela
        },

        notSubmit() {//Metodo para evitar que a pagina recarregue quando eu clico no button
            document.addEventListener('submit', (e) => {
                e.preventDefault();
            })
        },


        criaDivTarefa(block) {//Metodo que irá criar a div Card-Tarefa, que ira conter a tarefa, descrição e buttons
            cardTarefa = document.createElement('div');//Aqui eu crio o elemento DIV
            cardTarefa.classList.add('card-tarefas');//Aqui eu adiciono uma classe ao elemento
            cardTarefa.appendChild(block);//Aqui eu adiciono o parametro como filho do elemento Card-Tarefa. No caso, o unico parametro que foi passado para esse metodo é o H1 da tarefa. E pela ordem que foi feito o codigo e as chamadas, faz com que a tarefa sejá sempre a primeiro elemento adicionado, seguido da descrição e dos buttons
            divList.appendChild(cardTarefa);//Aqui eu o Card-Tarefa como um elemento filho da divList
        },

        saveTarefa() {//Esse metodo tem como objetivo salvar as tarefas dentro do Local Storage
            const tarefasJSON = JSON.stringify(getTaf);//Aqui eu utilizo o JSON para transfomar o array 'getTaf', que contem todas as tarefas, em String
            localStorage.setItem('tarefas', tarefasJSON);//Aqui eu salvo as tarefas, que estão armazenadas no tarefasJSON como string, dentro do local storage com o valor 'Tarefas'
        },

        saveDescription() {//Nesse metodo eu faço basicamente o mesmo procedimento que o anterior, mas agora salvando a descrição
            const descriptionJSON = JSON.stringify(getDes);
            localStorage.setItem('descricao', descriptionJSON);
        },

        tasksSalvas() { //Esse metodo será usado para mostrar as tarefas e descrições salvas sempre que o usuario abrir a pagina
           
            tarefaStorage = localStorage.getItem('tarefas');// Aqui eu pego as tarefas que estão salvas no Local Storge
            tarefaStorage = JSON.parse(tarefaStorage);//Aqui eu faço com que as tarefas, que foram transformadas em string, voletm a ser um array
            
            //Na linha abaixa, eu faço o mesmo processo, porem pegando as descrições salvas
            descriptionStorage = localStorage.getItem('descricao')
            descriptionStorage = JSON.parse(descriptionStorage)

            if(tarefaStorage === null || descriptionStorage === null) { //Aqui eu faço uma checagem para saber se tem alguma tarefa ou descrição salva
                
                return//Caso não tiver, o codigo ira retornar aqui
            
            } else if(tarefaStorage.length === descriptionStorage.length) {//Aqui eu checo se as quantidades de Tarefas e descrições são iguais

                for(let c = 0; c < tarefaStorage.length; c++) {//Aqui eu crio um for para pegar cada tarefa e descrição salva nos arrays
                    
                    let novoH1 = tarefaStorage[c];//Aqui eu crio um nova variavel que ira armazenar a tarefa que está salva em determinada posição do array

                    this.addTarefa(novoH1);//Aqui eu chamo o metodo de adicionar a tarefa passando como parametro a tarefa pegada anteriormente

                    //Nessas duas linhas abaixo, eu faço o mesmo procedimente mostrado acima, porem com a descrição
                    let novoP = descriptionStorage[c];
                    this.addDescription(novoP);

                    //Nesse ponto, sempre que o usuario abrir, ou recarregar a pagina, as tarefas que ele já adicionou continuaram salvas
                }
            } else {
                return// Caso nenhuma das condições acima sejam verdadeiras, o codigo irá retornar
            }
        }
    }

}

const tarefas = listaDeTarefas();
//Crio Uma const que vai receber uma Factory Function
tarefas.inicia();
//Chamo o metodo 'inicia()'