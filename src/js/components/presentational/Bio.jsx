import React from 'react';

export default function Bio () {
    return (
        <div className='container'>
            <div className='row'>
                <div className='six columns'>
                    <p>"'I want to be something new ... So take the pieces of my broken heart and make yourself a work of art and let me be something new for you.' That upbeat verse, culled from the title track of Michael Barrow & The Tourists' EP Something New, conveys the kind of unyielding optimism that's clearly needed now more than ever. Still, those who have followed the band over the course of its career also recognize it as a tack this Provo-based band has pursued since early on.</p>

                    <p>Originally formed in spring of 2016, the group—Barrow (vocals, guitar), Mark Lanham (guitar), Zach Collier (keys), Alessandro Improta (bass) and Reed Perkins (drums)—established its sensibility with the release of their widely heralded debut album, Juneau, and its successor, Santa Barbara Sessions. Something New continues to spawn upbeat arrangements and solid song craft, all while mining instant accessibility.</p>

                    <p>Although the EP features only five tracks, each song stands out: the optimally engaging 'What Is It For'; the effusive pop precepts of 'Sweet Honey'; the upbeat inflection of 'No Such Thing (As Getting Over You)'; the soulful stance on 'Never Stop'; the knowing sentiment distilled in the aforementioned title track. Overall, Barrow and company manage to keep matters mostly light and breezy, allowing for a radio-ready sound that bodes well for continuing commercial appeal." - Lee Zimmerman, Salt Lake City Weekly</p>
                </div>
                <div className='six columns'>
                    <img className="u-max-full-width" alt="Band Photo" src={require('../../../images/MB&T-70.jpg')}/>
                </div>
            </div>
        </div>
    );
}
