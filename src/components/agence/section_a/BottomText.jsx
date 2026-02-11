import React from "react";

function BottomText() {
  return (
    <div className="font-[Lausanne-300] text-[1.25em] px-[9vw]   " >
      <div className="top grid-cols-3 w-full h-full grid mb-[8em] gap-2 leading-tight ">
        <div className="pl-2.5 pr-10 " >
          <h2>Expertise</h2>
        </div>
        <div className="pl-2.5 pr-10" >
          <ul>
            <li>Stratégie</li>
            <li>Publicité</li>
            <li>Publicité</li>
            <li>Design</li>
            <li>Contenu</li>
          </ul>
        </div>
      </div>
      <div className="bottom leading-tight grid w-full mb-[8em] grid-cols-3 ">
        <div className="box pl-2.5 pr-10 ">
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
          et vivent grâce à la créativité sous toutes ses formes.
        </div>
        <div className="box pl-2.5 pr-10  ">
          Notre création_ bouillonne dans un environnement où le talent a le
          goût d’exploser. Où on se sent libre d’être la meilleure version de
          soi-même.
        </div>
        <div className="box pl-2.5 pr-10 ">
          Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
          participe à bâtir une agence dont on est fiers.
        </div>
      </div>
    </div>
  );
}

export default BottomText;
