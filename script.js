const OPTIONS = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72a855248bmsh54684d033017a04p1440bbjsn86be95681a44',
		'X-RapidAPI-Host': 'ip-directory.p.rapidapi.com'
	}
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-directory.p.rapidapi.com/lookup/${ip}`, OPTIONS)
  .then(res => res.json())
  .catch(err => console.log(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit',async (event) =>{
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})