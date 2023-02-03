import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
    state: {
        m_LiegeplatzId: null,
        m_Bezeichnung: null,
        m_Tagespreis: null,
        startdatum: null,
        enddatum: null,
        Kundendaten:{
            kundenId: null,
            Name: null,
            Vorname: null,
            Email: null,
            Rolle: null,
        }
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
        },
        setKundenDaten: (state, kundendaten)=>{
            state.Kundendaten.kundenId = kundendaten.m_KundenId;
            state.Kundendaten.Email = kundendaten.m_Email;
            state.Kundendaten.Vorname = kundendaten.m_Vorname;
            state.Kundendaten.Name = kundendaten.m_Name;
            state.Kundendaten.Rolle = kundendaten.m_Rolle;
        },
        clearKundenDaten: (state)=>{
            state.Kundendaten.kundenId = null;
            state.Kundendaten.Email = null;
            state.Kundendaten.Vorname = null;
            state.Kundendaten.Name = null;
            state.Kundendaten.Rolle = null;
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
        },
        getRolle(state){
            return state.Kundendaten.Rolle;
        },
        getKundenDaten(state){
            return state.Kundendaten;
        },
        getKundenId(state){
            return state.Kundendaten.kundenId;
        },
        getNameVorname(state){
            if(state.Kundendaten.Name != null){
                return state.Kundendaten.Vorname + ' ' +state.Kundendaten.Name;
            }
            
        }
    },
    plugins: [vuexLocal.plugin],
    
})