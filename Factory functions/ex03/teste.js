//Resolver os problemas como o localStorage e a exibição de taks que já forma informadas pelo usuario

function listaDeTarefas() {
    let divList = document.getElementById('list');
    let cardTarefa;
    let tarefasArray = []
    let descriptionArray = []
    let finishArray = []
    let delBtnArray = []
    return {
        inicia() {
            this.addTarefaStorage();
            this.click();
        },


        click() {
            document.addEventListener('click', (e) => {
                let el = e.target;
                if(el.classList.contains('addTarefa')) {
                    let tarefaInput = document.querySelector('#tarefa');
                    let descriptionInput = document.querySelector('#description');
                    let tarefa = tarefaInput.value;
                    let description = descriptionInput.value;
                    if(tarefa.length === 0 || description.length  === 0) {
                        alert('Digite a tarefa E a descrição');
                        tarefaInput.focus();
                        return
                    } else {
                        this.addTarefa(tarefa);
                        this.saveTarefas(tarefa);
                        this.addDescription(description);
                        this.saveDescription(description);
                        tarefaInput.value = ''
                        descriptionInput.value = ''
                        tarefaInput.focus();
                    }
                }
                if(el.classList.contains('Delete')) {
                    el.parentElement.remove();
                } else if(el.classList.contains('Checked')) {
                   let elementoPai = el.parentElement;
                   elementoPai.querySelector('h1').classList.toggle('done')
                   elementoPai.querySelector('p').classList.toggle('done')
                }
                
            })
        },


        addTarefa(t) {
            let h1Tarefa = document.createElement('h1');
            h1Tarefa.innerText = t;
            h1Tarefa.classList.add('taf-txt')
            /*let buttons = this.addBtn();
            let delet = buttons.btnDelet
            let finish = buttons.btnFinish*/
            this.criaDivTarefa(h1Tarefa);
        },

        addDescription(d) {
            let pDescription = document.createElement('p');
            pDescription.innerText = d;
            pDescription.classList.add('description-txt')
            cardTarefa.appendChild(pDescription)
            this.finishBtn();
        },

        finishBtn() {
            let btnFinish = document.createElement('button');
            btnFinish.innerText = '✓';
            btnFinish.classList.add('btn-list', 'Checked')
            this.notSubmit()
            cardTarefa.appendChild(btnFinish)
            //this.saveFinishBtn(btnFinish);
            this.delBtn();
        },

        delBtn() {
            let btnDelet = document.createElement('button');
            btnDelet.innerText = 'X';
            btnDelet.classList.add('btn-list', 'Delete')
            this.notSubmit()
            //this.saveDelBtn(btnDelet);
            cardTarefa.appendChild(btnDelet)
        },

        notSubmit() {
            document.addEventListener('submit', (e) => {
                e.preventDefault();
            })
        },


        criaDivTarefa(block) {
            cardTarefa = document.createElement('div');
            cardTarefa.classList.add('card-tarefas');
            cardTarefa.appendChild(block);
            divList.appendChild(cardTarefa);
        },

        saveTarefas(t) {
            tarefasArray.push(t)
            const tarefasJson = JSON.stringify(tarefasArray)
            localStorage.setItem('tarefas', tarefasJson);
            //this.addTarefaStorage()
        },

        saveDescription(d) {
            descriptionArray.push(d)
            const descriptionJson = JSON.stringify(descriptionArray);
            localStorage.setItem('descricao', descriptionJson)
            //this.addDescriptionStorage()
        },

        /*saveFinishBtn(f) {
            finishArray.push(f)
            const finishJson = JSON.stringify(finishArray)
            localStorage.setItem('btnFinish', finishJson)
        },

        saveDelBtn(del) {
            delBtnArray.push(del)
            const delJson = JSON.stringify(delBtnArray)
            localStorage.setItem('btnDel', delJson)
            
        },*/

        addTarefaStorage() {
            const taf = localStorage.getItem('tarefas')
            if (taf === null) return;
            const listaTaf = JSON.parse(taf)
            const des = localStorage.getItem('descricao')
            const listaDes = JSON.parse(des)
            if(listaTaf.length === listaDes.length) {
                for(let c = 0; c < listaTaf.length; c++) {
                    let novoH1 = document.createElement('h1')
                    novoH1.innerText = listaTaf[c]
                    this.criaDivTarefa(novoH1)
                    let novoP = document.createElement('p')
                    novoP.innerText = listaDes[c];
                    cardTarefa.appendChild(novoP);
                    this.finishBtn();
                }
            } else {
                return
            }
        },

        /*addDescriptionStorage() {
            const des = localStorage.getItem('descricao')
            const listaDes = JSON.parse(des)
        }*/

        
    }

}

const tarefas = listaDeTarefas();
tarefas.inicia();