import { createStore } from 'vuex'

export default createStore({
    state: {
        m_LiegeplatzId: null,
        m_Bezeichnung: null,
        m_Tagespreis: null,
        startdatum: null,
        enddatum: null
      },
    mutations: {
        setLiegeplatzBezeichnung: (state, m_Bezeichnung) =>{          
            state.m_Bezeichnung = m_Bezeichnung
        },
        setLiegeplatzID: (state, m_LiegeplatzId) =>{          
            state.m_LiegeplatzId = m_LiegeplatzId
        },
        setLiegeplatzTagespreis: (state, m_Tagespreis) =>{          
            state.m_Tagespreis = m_Tagespreis
        },
        setStartdatum: (state, startdatum) =>{          
            state.startdatum = startdatum
        },
        setEnddatum: (state, enddatum) =>{          
            state.enddatum = enddatum
        }
    },
    actions: {

    },
    getters: {
        getLiegeplatzId(state){
            return state.m_LiegeplatzId;
        },
        getLiegeplatzBezeichnung(state){
            return state.m_Bezeichnung;
        },
        getLiegeplatzTagespreis(state){
            return state.m_Tagespreis;
        },
        getstartDatum(state){
            return state.startdatum;
        },
        getEnddatum(state){
            return state.enddatum;
        }
    }
    
})