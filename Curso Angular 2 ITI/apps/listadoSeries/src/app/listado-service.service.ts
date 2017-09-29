import { Injectable } from '@angular/core';

@Injectable()
export class ListadoService {

   private _listaSeries: any [] =  [
    {
      "original_name": "The Big Bang Theory",
      "overview": "The Big Bang Theory is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
      "image":"https://images-na.ssl-images-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    
    },
    {
      "original_name": "Game of Thrones",
      "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      "image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEBUSExMVFhIWFRYXFRUWFRUaFxgTFxcXFxYYFRUYHSggGxolHRUYITEhJSotLi4uFx8zODMtOSgtLysBCgoKDg0OFQ8PFSsdFR0rLSstLS0tNy0rKy0tLSstLS0tLTctLS0tLTcrKzcrLTc3LSs3LSsrNzctLS0tKy0tK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAEEQAAICAQMCBAQDBAcGBwEAAAECABEDBBIhBTEiQVFhBhNxgTKRoRQjsfAzQlKSssHRBxUkYmPhQ2Ryo7PS8SX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGREBAQEBAQEAAAAAAAAAAAAAABEBAiES/9oADAMBAAIRAxEAPwD8OiIgIiICIiAnpEJ7T7jx2ZIwimgRnQjuJ5l3kxhllXk0xBlg4ToU8Nyboekvk7CRxhZX2MKPvERxxDkSRlnEqUfn+RPWdzcQWXTk5FV9D/lJzKrKQuSmPIsWBXe/QSH0rBuQMGCEMAAQTu8/I3+k95NZ8sn5bLRvcO4I9yaPnx9YEFsBJZQPEPL1+nPMiNgP6Wfb6ya7hBwxJoDwjj0F3OOME3VtxyKY9/cfxhUSpZ6XFajsq9ie/PlYHeQnSue3NEeh/jJmnLFTyKAq6PNdvYyCvzqQxB7gzxJ+p0DgFyP0PaQICT9Cw2yBJGNalzE1Oym1qe9Bo7b6TniUy50mIrj3VyZYPGbEBwJw1GnAW5bdP6Xkfx7fD6k/Xt/PnI3UNExNEcRBmW0xZqAlhpuikeJvyl307QgcyXq28NcX7QM3qcFCUubvNXk09qZnNdpCpJ8pBEiIkUiIgIiICIiAiIgIiIFnpa4k1tJYsSp0Lc1LBNYVavKaiPek07bqljp9CA43EfT+fqPznRXUrvXv5iSsT7gJUXWg0amtoAr1Hl7ekr/ivp2MDeaGTyHm30EiYdZkRyu7mxY8tpPuO9H9Jc9MXAx3sDdMpYs3Ciwyix5C6rnjiFfnOtQkBipBrtXl6yHumr60RvKsgUA2K5Lgki93Aqh27iZnVIt2l7feBL6bqwDtfsO1WO5FixyDV8z1nfG3C/MYCgu6r9wa+glfgB3ChZsce/3lymgIyjclVZJUs3PkCy/hN0fKr7iRUDT4vHtWyx4FjvfFVfezLI9Hcv4zt7A+5oABNo9qJrjid0dNx3hiH8DgqLurPi5O4ctfnU3HRukf8MhfIoxKrFNy0Eb8TNk3jxcea1VSQZpPh1bL7HYc0oQKTt8JVmvue4oC6PeS3+HSTQDUAKBUm1NfiAoGr9bms6BgxthAxsz8ck7u1kg8gcenrUucC/LQsyqg3ABifxd7JocUB5yo/P8Aq/SBjwsDuuvtXpXeYrNoB6TefGeuIzFSBwOPcHmZAZQxo9u01mJqv0Oitr8hLFtGD5fSS9JoS3CqQPc/5yR+wEWF7jjkk+/P5yiDo9HbAH7zVaHpj5GUKlgEWCapfM/bvPHTtIi7bFtYP3/kzf8AT8Qx4S4HMmiINCFXaAABM/1rChOwEByCQPMgVZ/UfnJvUernkCVHLHcTJFV+p0vy0JJAHqZF0umJPMsc2YOdtcHv/wB5B6rrxj8Kj7yxHTOAoqZz4gcbaHeWB1NoWPeZzXZCxiCvidTgPpPBUzMWvMSTp9E79hO79OK/i/KIVXxO+TF6TjtPpIr5ET6RIPk+gXLbQ6HcO1ywx9JAF128pYjj0foa5F57x1boBxrdcy50WoXGV95e9XYZMFgWRNZg/NNNg4956yYz3IlgwAM0Wk6cufECKscGaRmtPrOKlxps1odvDen+cjdb6SuIcfiHMq9PnK16iEWmryk0DV/zdS+6ZjOysYVnv8TFbx8cOVJO89u/bk8SowZFzAJQ3WvlzRYA1XtNF1DpuDAu9C37sEMcQDbWYKWXIxFDsK8+8mqzfxVoWOXaqhi3O4bnshqNP6X68zPsnhqzZNEc0pU8g33m1xai8d53xouwNizEMzlspA3LR8BtbZvKvOOprptxxYSc2cmsjHO4xnKvBZQ4O8ENyL42rRo8ZVk9LpEZebFcmh3X8PPBrxe/a/OpddL6SAQ65SQ28Eq45AsWQR9OD+k86TprY32kttLNwCwuvFtDUB5A8+ompXAo04yIAGDEVW013O4i7+3BlzBR/wC7Szi7C1YCqACD5ggck/Wbv4b6YDo2wv8AgONkZb5IqgQR2Pf85G6hiU48YSgAteFQDx2vjgTt0HqQTC4blth59wplFh/s96cqaYm2JPy1JZroY8KKFHoAd3HvL35+JtyWjBSVZTRr1BBlH/s5yg6V1PllYcjy2rYlV8T6x8OdlJvd+BqFgEngEC+1Cue3vMc+5i9ebrL/AO0MBtSWUg8cj0HYcenBmS06W4E2XUMAZe/Nff1kHSfDbbd/r2M6sa3Pwt8OI+nBzjG1+QHhry4bznHq/T8RysiIviABKnxEc8Gu099H6psxJiJ8QFGaD4eGPeXcD2mVZXRdCZGFqaHabfVKqYFQkBmBoHuTVmpdsMZK+HdZPIqloE23PbiuPMiUXW33ZAvoePaSj8v67l25KvnznDBnJ79povirpuPG4yG6o2eKseXe7mG1/UrPh4E0O+t1wDcSp1WYu0+6XH8zKAexmsw/Dw2kpW6uC3a/K/aEZfHiPY8R07pnzMu3yuXPWCofaK444lp8J4h80GvrAm6b4MTbucUKmS6p0JVyEKOLn6n1rq6gbftKRtIuVgAB6mSqxePGEXai2x9pGfpGRzbcCfpWDooHIX7mVfVEAJElGPfpuNFqrPrIR0P/ACian/d5/E3aV+Y88SK/PRPYO7jznOekUnt3mVWfS9acbAGa3LqA2Euvepk9JqQBWRbE0eg1ShPBRHmDNIocOp3tsuvQ+8utF1BsfgftIGu6PuJyYTz32/6SN+0OfC6mxNIvG6UuayjAH0jombJp8lOCF/Qz10bT7l3bq9pddQ6ti/ZziZQT/VbzuUd+s4EzYDtot39gOa79z/rMZi0m5dhFMPM8H7SQnUGVeDxc659YHQEDxg9/aEVGk0mRcoFHvzRA47fyZsA5XC2NsLMptXJZAr2u4NZB55rgH3mb13Kglb572ePKSsOt/djHe8GtuNlXaP8AmJKmjZJuTVT8+jcVp1DOdrWMZX5mIC2QbGN7L8gRx2A869NOceoXHmO5Sb5YEqb7oFNhaAP2HpJg6scblURVZURLVsjFkHJAIrbVkjmuwkDXthL78S7N1scZII5N7hR4HlXlJFbrTdPwvk2WWDEFdvzCFRgbtzwQQo8+DXqJpdf8M4V063Y+Xym0kGgOA5vxf5zOfCnX0205Ut5cCwOLH6S1ydUyZG2Xasdqjw1Z7V5+fnKjONrSLue+k4/mDK3kMbc+V0akvrvwpqrtcYZTdMMmMA/TcwM5aHTvgQrmKY1PfxqzEeypZlHr4O1pTSv5schI/urK74t1hybTzYm50nR8baVc+IIibTag+dm+/n2mU6j00tkNqxHsrf6RnMN26zOmxM5q+PMmarSawfLKEgbRx2qhfN/z2lX1LS/KC0CLW6IINe4PI7VKVtcVYmVHPqWoIylgb9D7H0mo+HetE4KJ5B7zA9RyljuvvJPSNQ3ADUPMf94H7X0DWttu5EbVjJmyMMhaqUrVKGAslSRze4A8keH6yp6Z1dceIVOXUeuWN1zKqr4/yMyCrPPYTI6Hp/8AWft6S06j1De/rOWRjY3fhEol/D+hV89kUgmh651FcalMfevKZV+q8gJwPSS+j69Vzb8g3V2vtcDn03oz5SXyeEe/cy2wapMCkJyfWStVqBmJIO2ZrVZNjHzqBM1WZj+9c0PIestPhPXbshvt5n0mfXTZdQQPwoPOaTpmHHiQ4wAQwpr8we4PtIL3rXWgi7VmVfOWO5uBJWu6hiBqrb+e0zmv1hoAk0BVnua9feQW2XUlwa4USh1GqIYicM3V6WhKPP1ElpFVc94moieImVXivjYd5wddo8Dc+kqp1TORNZqRb9J6ocbENL3TZsWRTv8AOY7Nqi3lJejZ2XigoNbmYKt96tiLPsJaNFqsGz+iJrzla2rJNGShlfGgZipBsCmVu1X2PHcd5BzalWNjiVEsYtwuuJAyEoeDLVt2K0awxRWo/wBl1DqfuGBlFnsgyizxa4MhBA3ev6c+s7aPDfIJvjg0OJWHTPhyHHlUq4AsGuzKGXt6hgfvJbK6bSwI3pvT3Qsyhq9CUb8r7EQPOoVhk8RN8XR9PI+vFT5lJ9b/AJ9Z10Oiy6nMuJAGyOaVSyrZ9AWIF/eSc/Q3xqrEoQ11sy48nars42Ndx3gQtHlYP4RyeO01fT9Tk/CwPuJQ6fEUayPeWWm6oOeYErrPVhR3+In15/UyN8J5rOWuOMRFe+pwg/oSPvKPqLsSSexMtfhLIuM5mJ4C4b+g1OEn+EI3/wARaopo8FeYIP8Ae4/hPz/U642fWbH4v1gbQKyg1icI58t7UwH5H+MweixvnyrixANkfhV3KtnvQLEC/vLR7bXtXr2H2HAEj5SxnfpehfNmXDjAbI17RvQAkcmmYhT29Z0bbXcd6FEG/oR3EUVefCSs4aZtp7y4To+bInzE2fLOT5e5s2HGPmEWFrI4NkAn7Ss6nosmLI2PKjJkQkMhHII9ZFWuLqfgq5YI+/EOZk9FgyZH2Y1LNRNcABQLLMxoKoHdiQBL7UdE1eHFvZVOMY0yMceXFk24sn4HYY2JCH+1Ve8g6jMqeVn1lXr9aXahI7Zz6z5q9JkxFd6lS+NMi3/Wx5FDIynzBB/iO4MCVpsN/WSWy7ePOcdOTj2s9VkXcpDKbXcVvwk14lYc1ypnvFjOVwuOixBIBZRwoLHliB2BP2iiXptQzdiZbacYlIJ5NecoP2r5YA8PiFgq6MPTuhIH0kZ9Q7Nx5C7sAAepJ7Dt+YgaTJ1gICBK3DrWLEk0DKLU6llamr1sEEEH0InzJ1A1INE+ZRzdmU/UdaGlVm1hMhtlJkV11OckyNPpM+SbqkREgREQJGDMo7qDLTVN+4wOB+7Kujf8uUZHYg+hKsh+n0lHO+l1j472MQG/EO6t6blPB+8tSLHUALgxvuY72yCqFDZt5Bvm9w/Kc+l4VyZlVz+75bIR3GJAXyVXntU171IOfUs4AY8Le1QAFF8mlFAXGn1ToGCmg67W4HK3dWRwOB29JaRqPiPUjUafHqkcu+N2w5iV20HLZcB22eKORAb/APDAlCuYsAgFs3A+p4E4abXZER8atSZABkWgQwU2tg+h5nLT52R1dTTKQymgaI5Bo8R9EfovxFpBr8j5r2tpdRl0+qYeWjV8j4M1AV4UR8XuUxjuZU/Fuv8AmYtFqa2h8GXGqDsqYdVmGNBXkuN0X6KJlH12QnIS5vL/AElcb/EH8QHfxKD9RPWXqORsKYGa8SFiikL4S5BbaasWQL58hFI1nwBqr6lpPfOl/nPGPX43RRjR0A/FvyK93VUwRK8+KP1mX6b1LLgyLlwuUyIbVgASD2sWO/vJGq61ly1vYGiTQREFtVkhFAJNDky0jWdPwLlfHhLVvyKgPetzAcDzPPaR9UuE6b5yYmxuumGoo5GYMP219KyPdc1tYFa5Dccis0msPFGj6g8gjsQZK6l1nPnXbkyF+KqlF+J2G4qAXO7I7c3y5PcmKRP+LAmPVZMWMLtTJkTwu7GlyMo37hw1LzXHInDRanauUf2lQflkQ/5Tx8Sj/jtUf/M5/wD5XkbHwOfOv4iSjefEOp//AJudP7Wqxn+7jxf/AGme+ASf96aTzHzh/haTev5QdG4/65/w4Zk9H1B8WRcmJimRfwsKtT2sX2PPeXdGz+ANbpz1DTKmndWLGmOo3AH5bd1+WL/OZ7G1AE+gkLRdVyYcozYm2ZQSVdVW1JFEqKocE9h5yNk1JJN/oAB9gOBFI2GmfE3TGGXI2NP2/EN6YhkoHBlslN68AWeCe3aV3xu2VdflOWvHtbGyncj6cqBhfG/9dSir4vUHseBRr1LIMJwB/wByX+YU2r/SVt3XV3Vi77EyxwdcR9J+yalWZcZLabKtF8LE26UxG7E3fbYo8jzElIndExh9BrwviyqNLkIH4v2Zcj/OoeahzgZv/SD5TQaTU/L12hdv6Jekp8/0OD9mzBw4/sklQL/rFfOp+d6HXZMORcuJ2TIp8LqdrDyPb1HBHbmpN6n8SanOAuXKWUKq7QqKNiWUUhFFqpJIB4B7RRXrkNC/SbRur4suzRattuMYNL+zagizpsjaXBYb1wMfxL5HxDzmGue9Xq2yNuc21Kt0o8KqFUUoHAAAHsBFF38T6TJpzgw5RtdcDAgGxR1OpZSp81IYEHzBBnn4Uzf8WgPICZz/AOxllJm1Tvt3sW2KEWze1ASQo9hZ4nrRa18TjJjYq4sBhVgEUav2JH3ikd3zJwcYZRXO5gx3exCrxVcVJXTdcEJZ03oV2ut1aEg8N5Nagg+olbqdY+StxFC6AVVAvvwoAvgc+0+afVMl7SKYUwIUgi75DAjuJKRP6niVclIxZCqshPDbWFgMPUXX2kJ83lOWXMzEsTZP/wCD7TnFV6ZrnmIkCIiAiIgIiICIiAiIgIiICIiAiIgfQ06jLOMQJKZpJOYfwlbOoeUabquovTuP+sf8OKZrdLHVZ7xMP+pf6J/pKkxo6hp83TncXA9s0+Fp4iQeg0+XPkQPu6fIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHfJk8JHvf6D/AEnCIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/2Q=="      
    },
    {
      "original_name": "The Walking Dead",
      "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      "image":"http://images.amcnetworks.com/amc.com/wp-content/uploads/2017/07/the-walking-dead-season-8-comic-con-rick-lincoln-negan-morgan-1200x707-logo-1.jpg"      
    },
    {
      "original_name": "The Simpsons",
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "image":"http://sm.ign.com/ign_latam/screenshot/default/simpson_n3uy.jpg"      
    },
    {
      "original_name": "Breaking Bad",
      "overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
      "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png"      
    },
    {
      "original_name": "American Horror Story",
      "overview": "American Horror Story is an anthology horror drama series.",
      "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ecran_Titre_d%27American_Horror_Story.png/1200px-Ecran_Titre_d%27American_Horror_Story.png"      
    },
    {
      "original_name": "South Park",
      "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
      "image":"http://www.bolsamania.com/seriesadictos/wp-content/uploads/2015/06/Parada_de_autobus.jpg"      
    }
  ];

  constructor() { }

  getSeries(): any[] {
    return this._listaSeries;
  }
}