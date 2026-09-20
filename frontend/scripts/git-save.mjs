import { execFileSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'
import {
    stdin as input,
    stdout as output
} from 'node:process'

function git(...args) {
    execFileSync(
        'git',
        args,
        {
            stdio: 'inherit'
        }
    )
}

function gitOutput(...args) {
    return execFileSync(
        'git',
        args,
        {
            encoding: 'utf8'
        }
    ).trim()
}

const message = process.argv
    .slice(2)
    .join(' ')
    .trim()

if (!message) {
    console.error(
        'Укажи сообщение коммита.\n' +
        'Пример: npm run save -- "feat: update hero"'
    )

    process.exit(1)
}

const repositoryRoot = gitOutput(
    'rev-parse',
    '--show-toplevel'
)

process.chdir(repositoryRoot)

const changes = gitOutput(
    'status',
    '--porcelain'
)

if (!changes) {
    console.log('Изменений нет.')

    process.exit(0)
}

const branch = gitOutput(
    'branch',
    '--show-current'
)

if (branch === 'main') {
    console.error(
        '\nПрямые commit и push в main запрещены.\n' +
        'Создай рабочую ветку, например:\n' +
        'git switch -c feat/homepage'
    )

    process.exit(1)
}

if (!branch) {
    console.error('Не удалось определить текущую ветку.')

    process.exit(1)
}

console.log(`\nВетка: ${branch}`)
console.log('\nИзменённые файлы:\n')

git(
    'status',
    '--short'
)

console.log('\nСтатистика изменений:\n')

git(
    'diff',
    '--stat'
)

const readline = createInterface({
    input,
    output
})

const answer = await readline.question(
    '\nСохранить изменения и отправить на GitHub? [Y/N]: '
)

readline.close()

const approved = [
    'y',
    'yes',
    'д',
    'да'
].includes(
    answer
        .trim()
        .toLowerCase()
)

if (!approved) {
    console.log('Отменено.')

    process.exit(0)
}

git(
    'add',
    '-A'
)

try {
    git(
        'diff',
        '--cached',
        '--check'
    )
} catch {
    console.error(
        '\nGit обнаружил проблемы в изменениях. Commit отменён.'
    )

    process.exit(1)
}

git(
    'commit',
    '-m',
    message
)

git(
    'push',
    '-u',
    'origin',
    branch
)

console.log('\nГотово. Изменения отправлены на GitHub.')